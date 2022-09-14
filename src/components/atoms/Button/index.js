import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';
import ButtonIcon from './ButtonIcon';

const Button = ({ title, onPress, type, name }) => {
    if (type === 'icon') {
        return <ButtonIcon name={name} onPress={onPress} />;
    }
    return (
        <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
            <Text style={styles.text.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    wrapper: {
        component: {
            backgroundColor: colors.default,
            borderRadius: 25,
            paddingVertical: 13,
        },
    },
    text: {
        title: {
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
        },
    },
};

export default Button;
