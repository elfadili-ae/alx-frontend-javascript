import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([userResp, PhotoResp]) => {
      console.log(`${PhotoResp.body} ${userResp.firstName} ${userResp.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
