import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {Feather,Ionicons} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent from '../components/Swiper';



export default function Detail() {
  return (
    <View style ={styles.container}>
     <View style={styles.swiperContent}>
      <SwiperComponent/>
      </View>

      <View style={styles.headerContent}>
        <View style={{width:'65%'}}>
          <Text>Casa de Praia</Text>
        </View>

        <View style={{width:'35%'}}>
          <Text>Avaliações </Text>
          <View style={{alignItems:'center', flexDirection:'row'}}>
            <Stars
             default={4}
             count={5}
             half={true}
             starSize={20}
             fullStart={<Ionicons name="md-star" size={24} style={styles.myStarstyle}/>}
             emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.myStarstyle}/>}
             halfStar={<Ionicons name="md-star-half" size={24} style={styles.myStarstyle}/>}
            




            />

          </View>
        </View>
      </View>

      <Text style={styles.price}>
        R$1.200,20
      </Text>

      <Text style={styles.description}>
        Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15, marginTop:35 }}>
        <View style={styles.slide}>
          <Image
          source={require('../assets/house5.jpg')} 
          style={{width:90, height:90,borderRadius:8}}
          />
        </View>

        <View style={styles.slide}>
          <Image
          source={require('../assets/house6.jpg')} 
          style={{width:90, height:90,borderRadius:8}}
          />
        </View>

        <View style={styles.slide}>
          <Image
          source={require('../assets/house2.jpg')} 
          style={{width:90, height:90,borderRadius:8}}
          />
        </View>
      </ScrollView>


     </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFF'
  },
  swiperContent:{
    flexDirection:'row',
    height:340,
    width:'100%',
  },
  headerContent:{
   paddingHorizontal:20,
   flexDirection:'row',
   alignContent:'center',
   width:'100%',
   marginTop:20,

  },
  house:{
    fontSize:18,
    color:'#4f4a4a'
  },
  rating:{
    fontSize:9,
    color:'#4f4a4a',
  },
  myStarstyle:{
    color:'#E7A74e',
    backgroundColor:'transparent',
    textShadowColor:'#000',
    textShadowOffset:{width:1, height:1},
    textShadowRadius:1,
  },
  price:{
    paddingHorizontal:20,
    fontSize:16,
    color:'#000'
  },
  description:{
    paddingHorizontal:20,
    color:'#b3aeae',
    fontSize:14,
    lineHeight:20,
    marginTop:20,
  },
  slide:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFF',
    height:90,
    height:90,
    borderRadius:8,
    marginRight:20,

  }
})