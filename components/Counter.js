import React from 'react'
import {
    Text, View, Image, Alert, Platform, ActivityIndicator, ScrollView
} from 'react-native'

import Button from 'react-native-button'
import _ from 'lodash'

export default class Counter extends React.Component{

    constructor(){
        super();
        this.state = {
            data: [],
        }
    }
    
    componentWillMount(){
        console.log(this.props)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.Api.data.length > 1){
            this.setState({ data: nextProps.Api.data })
        }
    }

    _renderData(data){
        return _.map(data,(item) => {
            return(
                <View style={{ flex:1,width:'100%',height:150,justifyContent:'center',alignItems:'center',alignSelf:'center', backgroundColor:'#ccc', margin:15 }}>
                    <Text style={{ paddingVertical:5,fontWeight:'600' }} >{item.first} {item.last}</Text>
                    <Text style={{ paddingVertical:5,fontWeight:'500' }} >{item.email}</Text>
                    <Text style={{ paddingVertical:5,fontWeight:'400' }} >{item.address}</Text>
                    <Text style={{ paddingVertical:5,fontWeight:'600' }} >{item.balance}</Text>
                </View>
            )
        })
    }

    _spinnerOrData(){
        if(this.props.Api.loading){
            return (
            <View style={{ flex:1,justifyContent:'center', alignItems: 'center', marginVertical: 15 }}>
                <ActivityIndicator />
            </View>
                )
        }

        return (
            <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
                {this.state.data.length > 1 ? <ScrollView>{this._renderData(this.state.data)}</ScrollView> : null}
            </View>
        );
    }

    render(){
        return(
            <View style={{ flex:1,marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <Text style={{ margin:20, fontWeight: 'bold', color:'forestgreen', fontSize:20, alignSelf:'center', textAlign:'center' }}>
                    Fetch Api Data {'\n'} And {'\n'} Counter
                </Text>

                <Text style={{ margin:20, fontWeight: 'bold', color:'forestgreen', fontSize:20, alignSelf:'center', textAlign:'center' }}>
                    Using Saga Midlleware {'\n'} And {'\n'} redux persist
                </Text>


                <View style={{ alignSelf:'center',height:50,margin:10,alignItems:'center',justifyContent:'center', flexDirection:'row',flex:1, width:'60%' }}>
                <Button
                        containerStyle={{ padding:10, height:45, borderRadius:10, backgroundColor: 'darkviolet',marginHorizontal:15 }}
                        style={{ fontSize:18, color: 'white' }}
                        onPress={() => {
                            this.props.onInc(1)
                        }}
                    >
                        Increment + 
                    </Button>
                    <Button
                        containerStyle={{ padding:10, height:45, borderRadius:10, backgroundColor: 'darkviolet',marginHorizontal:15 }}
                        style={{ fontSize:18, color: 'white' }}
                        onPress={() => {
                            this.props.onDec(1)
                        }}
                    >
                        Decrement - 
                    </Button>

                </View>

                <Text style={{ alignSelf:'center',margin:10, fontWeight: 'bold', color: 'darkblue', fontSize: 17 }}> counter : {this.props.times} </Text>

                <View style={{ borderWidth:0.6, borderBottomColor: '#ccc', width:'100%', marginVertical:5 }}></View>
                
                <View style={{ flex:3 }}>
                <Button
                        containerStyle={{ padding:10, height:45, borderRadius:10, backgroundColor: '#ccc',marginHorizontal:15 }}
                        style={{ fontSize:18, color: 'grey' }}
                        onPress={() => {
                            this.props.onFetch()
                        }}
                    >
                        Fetch Api Data
                    </Button>

                    <View style={{ flex:4 }}>
                        {this._spinnerOrData()}
                    </View>
                </View>
            </View>
        )
    }
}