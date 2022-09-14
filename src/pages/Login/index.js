import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IllustrationLogin } from '../../assets';
import { Button, Input } from '../../components/atoms';
import { setForm } from '../../redux';
import { colors } from '../../utils';

const Login = ({ navigation }) => {
    const { form } = useSelector(state => state.LoginReducer);
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
                <IllustrationLogin
                    width={177}
                    height={97}
                    style={styles.illustration}
                />
                <View style={styles.space(32)} />
                <View
                    style={{
                        maxWidth: 300,
                        alignSelf: 'center',
                        alignItems: 'center',
                        flex: 1,
                    }}>
                    <Text style={styles.text.desc}>
                        {`Silahkan mengisi data anda untuk masuk ke aplikasi O-JOL`}
                    </Text>
                </View>
                <View style={styles.space(50)} />
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
                <Button title="Login" onPress={sendData} />
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
        alignSelf: 'center',
    },
    text: {
        desc: {
            textAlign: 'center',
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

export default Login;
