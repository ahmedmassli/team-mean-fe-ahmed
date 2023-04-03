import { Text, SafeAreaView, View, TextInput, Button } from 'react-native';
import { styles } from '../styles';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// name, username, email, password, password confirm, currency

const NewUser = ({ navigation }) => {
  // const [name, onChangeName] = useState('');
  // const [username, onChangeUsername] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  // // const [passwordConfirm, onChangePasswordConfirm] = useState('');
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [currencies, setCurrencies] = useState([
  //   { label: 'Mexican Peso', value: 'mexicanPeso' },
  //   { label: 'Saudi Riyal', value: 'saudiRiyal' },
  //   { label: 'GBP', value: 'gbp' },
  // ]);
  // const [currency, setCurrency] = useState('')
  const [newUser, setNewUser] = useState({
    email: 'elliot94b@gmail.com',
    password: 'password',
  });

  const auth = getAuth();
  

  return (
    <SafeAreaView style={styles.newUser}>
      {/* <TextInput
        style={styles.placeholderText}
        placeholder="Enter your name"
        placeholderTextColor='#e2b44e'
        required
        text={name}
        onChangeText={onChangeName}
      />
      <TextInput
        style={styles.placeholderText}
        placeholder="Enter your username"
        placeholderTextColor='#e2b44e'
        required
        text={username}
        onChangeText={onChangeUsername}
      /> */}
      <TextInput
        style={styles.placeholderText}
        placeholder="Enter your email"
        placeholderTextColor="#e2b44e"
        inputMode="email"
        required
        text={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.placeholderText}
        placeholder="Enter a password"
        placeholderTextColor="#e2b44e"
        secureTextEntry={true}
        required
        text={password}
        onChangeText={onChangePassword}
      />
      {/* <TextInput
        style={styles.placeholderText}
        placeholder="Re-enter the password"
        placeholderTextColor='#e2b44e'
        secureTextEntry={true}
        required
        text={passwordConfirm}
        onChangeText={onChangePasswordConfirm}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={currencies}
        setOpen={setOpen}
        setValue={setValue}
        setItem={setCurrencies}
        onChangeValue={(value) => {
          setCurrency(value)
        }}
      /> */}
      <Button
        title="Submit"
        onPress={() => {
          setNewUser({
            ...newUser,
            email,
            password,
          });
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(newUser);
              console.log(
                email,
                '<-email',
                password,
                '<-password'
              );
              console.log(errorCode);
              console.log(errorMessage);
            });
          // post request using newUser as the request body to create
          // a new user on the DB
        }}
      />
    </SafeAreaView>
  );
};

export default NewUser;