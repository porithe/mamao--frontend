export const toastifyOptions: any = {
  position: 'top-center',
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
};

export enum TOAST_MESSAGES {
  GLOBAL_ERROR = 'Ups... Something went wrong!',
  CREATEAD_ACCOUNT = 'Account has been successfully created.',
  UNAUTHORIZED = 'Unauthorized!',
  USER_NOT_FOUND = 'User not found!',
  POST_ADDED = 'Post has been successfully added.',
  UPDATED_PROFILE = 'Profile has been successfully updated.',
}
