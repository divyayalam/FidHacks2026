import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';


const COLORS = {
  bg: '#081B33',
  card: '#102846',
  border: '#21436C',
  white: '#FFFFFF',
  soft: 'rgba(255,255,255,0.65)',
  fidelity: '#00A651',
};


export default function InvestLandingScreen() {

  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Invest
      </Text>

      <Text style={styles.subtitle}>
        Build wealth one paycheck at a time.
      </Text>


      <View style={styles.card}>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            RECOMMENDED
          </Text>
        </View>


        <Text style={styles.cardTitle}>
          Fidelity Roth IRA
        </Text>


        <Text style={styles.description}>
          Start investing for retirement with
          tax-free growth. Fidelity makes it
          simple for beginners to start building
          long-term wealth.
        </Text>


        <Benefit text="No account minimum" />

        <Benefit text="Automatic contributions" />

        <Benefit text="Fractional investing" />

        <Benefit text="Beginner friendly" />


        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() =>
            navigation.navigate('FidelitySetup')
          }
        >

          <Text style={styles.primaryText}>
            Open with Fidelity
          </Text>

        </TouchableOpacity>


      </View>



      <View style={styles.card}>


        <Text style={styles.cardTitle}>
          Already have a Roth IRA?
        </Text>


        <Text style={styles.description}>
          Connect your existing retirement account
          to track contributions and progress.
        </Text>



        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() =>
            navigation.navigate('ConnectIRA')
          }
        >

          <Text style={styles.outlineText}>
            Connect Existing Account
          </Text>

        </TouchableOpacity>


      </View>


    </SafeAreaView>
  );
}



function Benefit({text}) {

  return (

    <View style={styles.benefit}>

      <Text style={styles.check}>
        ✓
      </Text>


      <Text style={styles.benefitText}>
        {text}
      </Text>

    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:COLORS.bg,
    padding:22,
  },


  title:{
    marginTop:20,
    fontSize:34,
    fontWeight:'700',
    color:COLORS.white,
  },


  subtitle:{
    marginTop:8,
    color:COLORS.soft,
    fontSize:15,
    marginBottom:30,
  },


  card:{
    backgroundColor:COLORS.card,
    borderRadius:22,
    borderWidth:1,
    borderColor:COLORS.border,
    padding:22,
    marginBottom:18,
  },


  badge:{
    alignSelf:'flex-start',
    backgroundColor:COLORS.fidelity,
    paddingHorizontal:12,
    paddingVertical:6,
    borderRadius:20,
    marginBottom:15,
  },


  badgeText:{
    color:'white',
    fontWeight:'700',
    fontSize:11,
  },


  cardTitle:{
    color:COLORS.white,
    fontSize:21,
    fontWeight:'700',
    marginBottom:12,
  },


  description:{
    color:COLORS.soft,
    lineHeight:21,
    fontSize:14,
    marginBottom:18,
  },


  benefit:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:12,
  },


  check:{
    color:COLORS.fidelity,
    fontSize:18,
    marginRight:10,
    fontWeight:'700',
  },


  benefitText:{
    color:COLORS.white,
    fontSize:14,
  },


  primaryButton:{
    backgroundColor:COLORS.fidelity,
    marginTop:18,
    paddingVertical:15,
    borderRadius:15,
    alignItems:'center',
  },


  primaryText:{
    color:'white',
    fontWeight:'700',
    fontSize:15,
  },


  outlineButton:{
    borderColor:COLORS.fidelity,
    borderWidth:1.5,
    borderRadius:15,
    paddingVertical:15,
    alignItems:'center',
    marginTop:10,
  },


  outlineText:{
    color:COLORS.fidelity,
    fontWeight:'700',
    fontSize:15,
  },

});