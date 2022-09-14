import React from 'react';
import { Image, Text, View } from 'react-native';
import { welcomeAuth } from '../../assets';
import { colors } from '../../utils';
import ActionButton from './ActionButton';

const WelcomeAuth = ({ navigation }) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.wrapper.page}>
            <Image
                source={welcomeAuth}
                style={{ width: 305, height: 129, marginBottom: 10 }}
            />
            <Text style={styles.text.welcome}>Selamat datang di O-JOL</Text>
            <ActionButton
                desc="Silahkan pilih masuk, jika anda sudah memiliki akun"
                title="Masuk"
                onPress={() => handleGoTo('Login')}
            />
            <ActionButton
                desc="atau silahkan daftar jika anda  belum memiliki akun"
                title="Daftar"
                onPress={() => handleGoTo('Register')}
            />
        </View>
    );
};

const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white',
        },
    },
    text: {
        welcome: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.default,
            marginBottom: 105,
        },
    },
};

export default WelcomeAuth;
