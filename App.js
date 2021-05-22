import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView, Dimensions } from 'react-native';
import Todo from "./Todo";
import { BarChart, LineChart } from "react-native-chart-kit";



//Let erop dat je bij auto import niet steeds op die "react-native-web" uitkomt. Het moet uit de gewone "react-native"


//Key toevoegen!! met een package die heet: uuidv4 -->Verder op studeren ook film op ong: 1:56:00.


const App = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState(0);
    const [gigs, setGigs] = useState([  //Gig would have a description and amount
        {
          description: 'Freelance job with Jamila',
          amount: 499.99
        }
    ]);

    //Whenever the gigs change recalculate the total. Reduce gebruiken
    useEffect(() => {
        setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
    }, [gigs])

    //Hier ga je dus idd maken wat er gebeurd als je op de "Add Gig- knop" drukt (2:18:50)
    const addGig = () => {
        setGigs([...gigs, {
            description: description,
            amount: amount
        }]);
        //After you submit the gig; reset to zero and set amount to zero:
        setDescription('');
        setAmount('');

    }

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };






    return (
        <SafeAreaView>
          <View >
            <Text style={styles.titleText} >
                Let's build a React Native App for Freelance Devs to Track Income </Text>
          </View>
          <View>

                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
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
