import { TouchableOpacity } from 'react-native';

export default function TouchComponent({children}) {
  return (
    <TouchableOpacity>{children}</TouchableOpacity>
  );
}
