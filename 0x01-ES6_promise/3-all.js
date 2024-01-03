import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();

  Promise.all([user, photo])
    .then(([userResp, PhotoResp]) => {
      console.log(`${PhotoResp.body} ${userResp.firstName} ${userResp.lastName}`);
    })
    .catch(() => console.error('Signup system offline'));
}
