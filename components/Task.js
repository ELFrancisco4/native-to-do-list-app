import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Task = ({text}) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
        item:{
            backgroundColor:'#9ca4fc',
            borderRadius: 10,
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
        },
        itemLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        square: {
            width: 24,
            height: 24,
            backgroundColor: '#9ed182',
            opacity: .4,
            borderRadius: 5,
            marginRight: 15,
        },
        text: {
            maxWidth: '80%',
        },
        circular: {
            width: 12,
            height: 12,
            borderColor: '#f8da69',
            borderWidth: 2,
            borderRadius: 5,
        },
})

export default Task