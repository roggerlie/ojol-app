import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Input } from '../../components/atoms';
import { colors } from '../../utils';
import { IllustrationRegister } from '../../assets';
import { useSelector, useDispatch } from 'react-redux';
import { setForm } from '../../redux';

const Register = ({ navigation }) => {
    const { form } = useSelector(state => state.RegisterReducer);
    const dispatch = useDispatch();

    const sendData = () => {
        console.log('data yang dikirim: ', form);
    };

    const onInputChange = (value, inputType) => {
        dispatch(setForm(inputType, value));
    };

    return (
        <View style={styles.wrapper.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Button
                    type="icon"
                    name="back"
                    onPress={() => navigation.goBack()}
                />
                <IllustrationRegister
                    width={193}
                    height={120}
                    style={styles.illustration}
                />
                <Text style={styles.text.desc}>
                    {`Mohon mengisi beberapa data\nuntuk proses daftar anda`}
                </Text>
                <View style={styles.space(64)} />
                <Input
                    placeholder="nama lengkap"
                    value={form.fullName}
                    onChangeText={value => onInputChange(value, 'fullName')}
                />
                <View style={styles.space(33)} />
                <Input
                    placeholder="email"
                    value={form.email}
                    onChangeText={value => onInputChange(value, 'email')}
                />
                <View style={styles.space(33)} />
                <Input
                    placeholder="password"
                    value={form.password}
                    onChangeText={value => onInputChange(value, 'password')}
                    secureTextEntry={true}
                />
                <View style={styles.space(60)} />
                <Button title="Daftar" onPress={sendData} />
            </ScrollView>
        </View>
    );
};

const styles = {
    wrapper: {
        page: { padding: 20 },
    },
    illustration: {
        marginTop: 20,
    },
    text: {
        desc: {
            position: 'absolute',
            left: 120,
            top: 150,
            fontWeight: 'bold',
            fontSize: 14,
            color: colors.default,
        },
    },
    space: value => {
        return {
            height: value,
        };
    },
};

export default Register;
