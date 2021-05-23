import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView, Dimensions } from 'react-native';
import Todo from "./Todo";
import { BarChart, LineChart } from "react-native-chart-kit";
import moment from 'moment';



//Let erop dat je bij auto import niet steeds op die "react-native-web" uitkomt. Het moet uit de gewone "react-native"


//Key toevoegen!! met een package die heet: uuidv4 -->Verder op studeren ook film op ong: 1:56:00.

//dataset needs to be in a state (varable)

const App = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState(0);
    const [data, setData] = useState([ //zo zet je dus meerdere dingen in een array!
        {[moment()]: 2000},
        {[moment().subtract(1, 'days')]: 2500},
        {[moment().subtract(2, 'days')]: 3500},
        {[moment().subtract(3, 'days')]: 4500},
        {[moment().subtract(4, 'days')]: 5500},
    ]) //bringing the data in a piece of state, dan kan je dat hardcoded Math.randon() weghalen.

    const [gigs, setGigs] = useState([  //Gig would have a description and amount
        {
          description: 'Freelance job with Jamila',
          amount: 499.99,
          date: new Date()
            //this is the first hardcoded start
        },

    ]);

    //create two helper functions
    /*const getDates = () => {
        const dates = data.map(pair => Object.keys(pair)[0])
        return dates;
        // [ date1, date2, date3, date4, date5 ]
        // ['10/27/2020'] -> '10/27/2020'
    }*/
    //Nu in 1 regel:
    const getDates = () => data.map(pair => Object.keys(pair)[0]);

    const getAmounts = () => data.map(pair => Object.values(pair)[0]);

    console.log('DEBUG :', data)
    console.log('The Amounts' , getAmounts());



    //Whenever the gigs change recalculate the total. Reduce gebruiken
    useEffect(() => {
        setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
    }, [gigs])

    //Hier ga je dus idd maken wat er gebeurd als je op de "Add Gig- knop" drukt (2:18:50)
    const addGig = () => {
        setGigs([...gigs, {
            description: description,
            amount: amount,
            timestamp: new Date()
        }]);
        //After you submit the gig; reset to zero and set amount to zero:
        setDescription('');
        setAmount('');

    }


    return (
        <SafeAreaView>
          <View >
            <Text style={styles.titleText} >
                Let's build a React Native App for Freelance Devs to Track Income </Text>
          </View>
          <View>

              {/* -->Array with datapoints maken
                [
                    {Date, 2000 },
                    {Date2, 3500 }
                ]
              */}

                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: getDates(),
                        datasets: [
                            {
                                data: getAmounts()
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    //yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "green",
                        backgroundGradientTo: "green",
                        decimalPlaces: null, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
            <Text> Total Income: ${total}</Text>
            <TextInput
                style={styles.input}
                value={description}
                placeholder='Enter a description'
                onChangeText={text => setDescription(text)}
            />
            <TextInput
                style={styles.input}
                value={amount}
                placeholder='Enter the amount you made in USD ($)'
                keyBoardType='numeric'
                onChangeText={text => setAmount(text)}
            />
            <Button disabled={!amount && !description} onPress={addGig} title='Add Gig'/>

            {/*Hieronder renderen om te testen of het werkt; Map-verhaal van Marlou weer*/}
            {gigs.map(gig => (
                <View>
                    <Text>{gig.description}</Text>
                    <Text>{gig.amount}</Text>
                </View>
            ))}



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
      marginTop: 20,
      padding: 20,
      height: 40,
      borderColor: 'red',
      borderWidth: 1
    },
    titleText: {
    //backgroundColor: 'red',
    fontSize: 30,
    fontWeight: "bold",
  },
  red: {
    color: 'red',
  },
});

export default App;

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Check!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
