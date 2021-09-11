import { bold, white } from 'ansi-colors';
import { whitesmoke } from 'color-name';
import React from 'react';
import { View , Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';


const App = () =>{
  return(
    <View>

      <View>
    <Image style={styles.heroImg} source={require('./assets/illustration-hero.svg')} />
    </View>

    <View style={styles.container}>
        <Text style={styles.heading}>Order Summary</Text>
        <Text style={styles.para}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</Text>
    </View>
<View style={styles.mainContainer}>
   <View style={styles.plan}>
      <Image style={styles.musicIcon} source={require('./assets/icon-music.svg')} />
        <View>
            <Text style={{fontSize:15, fontWeight:"bold"}}>Annual Plan</Text>
            <Text style={{fontSize:15}}>$59.99/year</Text>
         </View>
         <TouchableOpacity>
              <Text style={styles.btnChng}>Change</Text>
         </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.btnPayment}>
      <Text style={styles.btnPaymentText}>Proceed to payment</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{alignItems:'center'}}>
      <Text style={{color:'silver', fontWeight:'bold',fontSize:20,marginVertical:15}}>
        Cancel Order
      </Text>
    </TouchableOpacity>
</View>
    
    </View>
  );
}
export default App;

const styles= StyleSheet.create({
  mainContainer:{
      paddingHorizontal:30
  },
  heroImg:{
    height:400,
  },
  container:{
    alignItems:'center',
    justifyContent:'center',
    marginVertical:20

  },
  heading:{
    fontSize:30,
    fontWeight:800,
    marginVertical:20
  },
  para:{
    fontSize:20,
    fontWeight:300,
    color:'silver',
    paddingHorizontal:30,
    textAlign:'center'
  },
  musicIcon:{
    height:50,
    width:50
  },
  btnChng:{
      fontSize:16,
      color:'blue'
  },
  btnPayment:{
    elevation:8,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 4, width: 4 }, // IOS
    shadowOpacity: 9, // IOS
    shadowRadius: 20, //IOS
    backgroundColor: "blue",
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:12,
    marginVertical:20,
    alignItems:"center"
  },
  btnPaymentText:{
    color:"white",
    fontWeight:"bold",
    fontSize:20
  },
  plan:{
    flexDirection:'row',
    paddingHorizontal:30,
    paddingVertical:10,
    marginVertical:15,
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: 'whitesmoke',
    borderRadius:20,
  }

});