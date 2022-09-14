import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '../../../utils';

const Input = ({ placeholder, ...rest }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.default}
            {...rest}
        />
    );
};

const styles = {
    input: {
        borderWidth: 1,
        borderColor: colors.default,
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 18,
        fontSize: 14,
        color: colors.default,
    },
};

export default Input;
