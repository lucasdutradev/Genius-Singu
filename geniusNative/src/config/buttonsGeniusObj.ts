import Sound from 'react-native-sound';
Sound.setCategory('Playback');
const doNote = new Sound('notado.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const laNote = new Sound('notala.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const reNote = new Sound('notare.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const siNote = new Sound('notasi.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

export const AllButtons = [
  {rotate: 0, color: '#ff6f6f', code: 1, isActive: false, nota: doNote},
  {rotate: 90, color: '#80ff86', code: 2, isActive: false, nota: laNote},
  {rotate: 270, color: '#e0ff6e', code: 4, isActive: false, nota: reNote},
  {rotate: 180, color: '#8afbff', code: 3, isActive: false, nota: siNote},
];
