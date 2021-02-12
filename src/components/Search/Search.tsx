import React, { useEffect, useState, useRef } from 'react';
import { useDebounce } from 'use-debounce';
import { toast } from 'react-toastify';
import { Wrapper, Input, UserList, UserItem, UserLink } from './Search.styles';
import userApi from '../../api/user';
import { TOAST_MESSAGES, toastifyOptions } from '../../constants/toastify';

type User = {
  avatar: null | string;
  username: string;
};

const Search = () => {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [responseData, setResponseData] = useState<User[]>([]);
  const [debouncedUsername] = useDebounce(username, 1000);
  const getUsers = async () => {
    try {
      const { data } = await userApi.searchUsers(debouncedUsername);
      setResponseData(data);
    } catch {
      toast.error(TOAST_MESSAGES.GLOBAL_ERROR, toastifyOptions);
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    // @ts-ignore
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);
  useEffect(() => {
    if (debouncedUsername.length > 3) {
      getUsers();
      setIsVisible(true);
    } else {
      setResponseData([]);
    }
  }, [debouncedUsername]);
  return (
    <Wrapper ref={wrapperRef}>
      <Input
        placeholder="Search mamao"
        isUserListOpen={isVisible}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {!!responseData.length && isVisible && (
        <UserList>
          {responseData.map(({ username }) => (
            <UserItem key={username}>
              <UserLink to={`/profile/${username}`}>{`@${username}`}</UserLink>
            </UserItem>
          ))}
        </UserList>
      )}
    </Wrapper>
  );
};

export default Search;
