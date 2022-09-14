import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/atoms';
import { colors } from '../../utils';

const ActionButton = ({ desc, title, onPress }) => {
    return (
        <View style={styles.wrapper.component}>
            <Text style={styles.text.desc}>{desc}</Text>

            <Button title={title} onPress={onPress} />
        </View>
    );
};

const styles = {
    wrapper: {
        component: { marginBottom: 20, maxWidth: 225 },
    },
    text: {
        desc: {
            fontSize: 10,
            color: colors.text.default,
            textAlign: 'center',
            marginBottom: 10,
        },
    },
};

export default ActionButton;
