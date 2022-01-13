// // import React, { useState, useEffect } from 'react';
// // import {
// //   Card, Title,
// // } from 'react-native-paper';
// // import {
// //   StyleSheet, Text, TextInput, Button, View, ScrollView, SafeAreaView, RefreshControl, Alert,
// // } from 'react-native';
// // import firebase from 'firebase';
// // import FruitController from './Fruit';

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// // const firebaseConfig = {
// //   apiKey: 'AIzaSyD3BnkIPNp9dCqfhGrokC55ctWv9T5vkpc',
// //   authDomain: 'test-4e485.firebaseapp.com',
// //   projectId: 'test-4e485',
// //   storageBucket: 'test-4e485.appspot.com',
// //   messagingSenderId: '625238849613',
// //   appId: '1:625238849613:web:816ef774b13a3cc54e0404',
// // };

// // export default function App() {
// //   if (!firebase.apps.length) {
// //     firebase.initializeApp(firebaseConfig);
// //   } else {
// //     firebase.app();
// //   }
// //   const [items, setItems] = useState([]);
// //   const [newFruit, setNewFruit] = React.useState('請在此輸入');
// //   const [fruitprice, setNewFruitprice] = React.useState('請在此輸入');
// //   const [refreshing, setRefreshing] = useState(false);
// //   const onRefresh = () => {
// //     setRefreshing(true);
// //     FruitController.getAllFruits().then((res) => {
// //       setItems(res);
// //       setRefreshing(false);
// //     });
// //   };
// //   useEffect(() => {
// //     FruitController.getAllFruits().then((res) => {
// //       setItems(res);
// //     }).catch((err) => {
// //       throw err;
// //     });
// //   }, []);
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <ScrollView
// //         style={styles.scrollView}
// //         refreshControl={(
// //           <RefreshControl
// //             refreshing={refreshing}
// //             onRefresh={onRefresh}
// //           />
// //       )}
// //       >
// //         <View style={styles.container}>
// //           { items.map(({
// //             id, name, price,
// //           }) => (
// //             <Card
// //               key={id}
// //               style={{ flex: 1, padding: 10, margin: 4 }}
// //             >
// //               <Card.Content>
// //                 <Title>{name}</Title>
// //                 <Text>{`價錢:${price}`}</Text>
// //               </Card.Content>
// //             </Card>
// //           ))}
// //           <Text>{'\n'}</Text>
// //           <Text>水果名稱</Text>
// //           <TextInput
// //             value={newFruit.name}
// //             onChangeText={(text) => setNewFruit({ ...newFruit, name: text })}
// //             style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
// //           />
// //           <Text>{'\n'}</Text>
// //           <Text>水果價格</Text>
// //           <TextInput
// //             value={fruitprice.name}
// //             onChangeText={(text) => setNewFruitprice({ ...fruitprice, name: text })}
// //             style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
// //             keyboardType="numeric"
// //           />
// //           <Button
// //             onPress={() => {
// //               const {
// //                 name, price,
// //               } = newFruit;
// //               if (name === undefined) {
// //                 Alert.alert('商品名稱不得為空');
// //               } else if (price === undefined) {
// //                 Alert.alert('價錢不得為空');
// //               } else {
// //                 FruitController.addFruit(name, price, false);
// //               }
// //             }}
// //             title="新增水果"
// //             color="#007FFF"
// //           />
// //           <Button onPress={FruitController.getFruit} title="get fruit" color="#007FFF" />
// //           <Text>{'\n'}</Text>
// //           <Button onPress={FruitController.getAllFruits} title="get all fruits" color="#0000FF" />
// //           <Text>{'\n'}</Text>
// //           <Button onPress={FruitController.addFruit} title="add fruit" color="#00FF00" />
// //           <Text>{'\n'}</Text>
// //           <Button onPress={FruitController.deleteFruit} title="delete fruit" color="#FF0000" />
// //           <Text>{'\n'}</Text>
// //           <Button
// //             onPress={() => FruitController.deleteNotApple()}
// //             title="delete not apple"
// //             color="#007FFF"
// //           />
// //           <Button
// //             onPress={() => FruitController.addFruit()}
// //             title="add fruit"
// //             color="#007FFF"
// //           />
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }
// import React from 'react';
// import {
//   RefreshControl, StyleSheet, Text, Button, SafeAreaView, ScrollView,
// } from 'react-native';
// import firebase from 'firebase';
// import TimeController from './Time';

// const wait = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const firebaseConfig = {
//   apiKey: 'AIzaSyD3BnkIPNp9dCqfhGrokC55ctWv9T5vkpc',
//   authDomain: 'test-4e485.firebaseapp.com',
//   projectId: 'test-4e485',
//   storageBucket: 'test-4e485.appspot.com',
//   messagingSenderId: '625238849613',
//   appId: '1:625238849613:web:816ef774b13a3cc54e0404',
// };
//   // Firebase Configuration

// export default function App() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   } else {
//     firebase.app();
//   }
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(2000).then(() => setRefreshing(false));
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
//         refreshControl={(
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//           />
//         )}
//       >
//         <Text>下滑重整</Text>
//         <Button onPress={TimeController.getLastestTime} title="get lastest time" color="#FFBF09" />
//         <Text>{'\n'}</Text>
//         <Button onPress={TimeController.getAllTimes} title="get all time" color="#007aaa" />
//         <Text>{'\n'}</Text>
//         <Button onPress={TimeController.addCurrentTime} title="add current time" color="#00cc00" />
//         <Text>{'\n'}</Text>
//         <Button onPress={TimeController.deleteEarliestTime} title="delete earliest time" color="#cc0023" />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import First from './First';
// // import Second from './Second';

// // const Stack = createStackNavigator();

// // function App() {
// //   return (
// //     <NavigationContainer initialRouteName="Home">
// //       <Stack.Navigator>
// //         <Stack.Screen name="Home" component={First} />
// //         <Stack.Screen name="Next" component={Second} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // export default App;

// // import React from 'react';
// // import {
// //   StyleSheet, Text, Button, View,
// // } from 'react-native';
// // import firebase from 'firebase';

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// // const firebaseConfig = {
// //  apiKey: "AIzaSyD3BnkIPNp9dCqfhGrokC55ctWv9T5vkpc",
// //  authDomain: "test-4e485.firebaseapp.com",
// //  projectId: "test-4e485",
// //  storageBucket: "test-4e485.appspot.com",
// //  messagingSenderId: "625238849613",
// //  appId: "1:625238849613:web:816ef774b13a3cc54e0404"
// // };

// // async function getFruit() {
// //   const db = firebase.firestore();
// //   const fruitRef = db.collection('fruit').doc('0qGB6EHC5n7QH1Zh00oC');
// //   const doc = await fruitRef.get();
// //   console.log(doc.data());
// // }

// // function addFruit() {
// //   const db = firebase.firestore();
// //   const fruitsRef = db.collection('fruit');
// //   const fruit = {
// //     name: 'grape',
// //     price: '24',
// //     onSale: false,
// //   };
// //   fruitsRef.add(fruit);
// // }

// // async function getAllFruits() {
// //   const db = firebase.firestore();
// //   const fruitsRef = db.collection('fruit');
// //   const querySnapshot = await fruitsRef.get();
// //   querySnapshot.forEach((doc) => {
// //     console.log(doc.id, '=>', doc.data());
// //   });
// // }

// // function deleteFruit() {
// //   const db = firebase.firestore();
// //   const fruitRef = db.collection('fruit').doc('2Hsw6oWL6G5rE6d0mYLG');
// //   fruitRef.delete();
// // }
// // async function deleteNotApple() {
// // const db = firebase.firestore();
// //  const fruitsRef = db.collection('fruit');
// //  const querySnapshot = await fruitsRef.where('name', '!=', 'apple').get();
// //  querySnapshot.forEach((doc) => {
// //    db.collection('fruit').doc(doc.id).delete();
// //  });
// // }

// // export default {
// //  deleteNotApple,
// // };
// // export default function App() {
// //   if (!firebase.apps.length) {
// //     firebase.initializeApp(firebaseConfig);
// //   } else {
// //     firebase.app();
// //   }
// //

// //   return (
// //     <View style={styles.container}>
// //       <Button onPress={getFruit} title="get fruit" color="#007FFF" />
// //       <Text>{'\n'}</Text>
// //       <Button onPress={getAllFruits} title="get all fruits" color="#0000FF" />
// //       <Text>{'\n'}</Text>
// //       <Button onPress={addFruit} title="add fruit" color="#00FF00" />
// //       <Text>{'\n'}</Text>
// //       <Button onPress={deleteFruit} title="delete fruit" color="#FF0000" />
// //       <Text>{'\n'}</Text>
// //       {/* <Button onPress={switchFruitOnSale} title="switch on sale" color="#FFBF00" /> */}
// //     </View>
// //   );
// // }

// }
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, Button, ScrollView, RefreshControl, SafeAreaView,
} from 'react-native';
import firebase from 'firebase';
import TimeController from './Time';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firebaseConfig = {
  apiKey: 'AIzaSyD3BnkIPNp9dCqfhGrokC55ctWv9T5vkpc',
  authDomain: 'test-4e485.firebaseapp.com',
  projectId: 'test-4e485',
  storageBucket: 'test-4e485.appspot.com',
  messagingSenderId: '625238849613',
  appId: '1:625238849613:web:816ef774b13a3cc54e0404',
};

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const [times, setTimes] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    TimeController.getAllTimes().then((res) => {
      setTimes(res);
      setRefreshing(false);
    });
  };
  const onRefreshOne = () => {
    setRefreshing(true);
    TimeController.getLastestTime().then((res) => {
      setTimes(res);
      setRefreshing(false);
    });
  };
  const onRefreshDelete = () => {
    setRefreshing(true);
    TimeController.deleteEarliestTime().then((res) => {
      setTimes(res);
      setRefreshing(false);
    });
  };
  const onRefreshAdd = () => {
    setRefreshing(true);
    TimeController.addCurrentTime().then((res) => {
      setTimes(res);
      setRefreshing(false);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
      >
        <Text>{times}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>

        <Button
          onPress={onRefreshOne}
          title="get lastest time"
          color="#FFBF00"
        />
        <Text>{'\n'}</Text>

        <Button
          onPress={onRefresh}
          title="get all time"
          color="#007FFF"
        />
        <Text>{'\n'}</Text>

        <Button
          onPress={onRefreshAdd}
          title="add current time"
          color="#00FF00"
        />
        <Text>{'\n'}</Text>

        <Button
          onPress={onRefreshDelete}
          title="delete earliest time"
          color="#FF0000"
        />

      </ScrollView>
    </SafeAreaView>
  );
}
