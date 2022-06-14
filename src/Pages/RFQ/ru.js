







<FlatList 
      data={allRfq}
        keyExtractor={(item) => item.id}
     
        renderItem={({item})=>{
          console.log(item?.vendorArray, 'item1234567890')
          return (
            <View>
            {item?.vendorArray.map((item)=>{
              return (
                <View  key={Math.random()}>
                <View>{item?.priceList?.priceArray.map((details)=>{
                  return (
                    <View key={Math.random()}>
                    <View style={styles.subContainer}>
                   <View>
                   <Text> {details?.request?.name?.name}</Text>
                   </View>

                   <View>
                   <Text>{NAIRA_SYSMBOL}{details?.price}</Text>
                   </View>

                   <View>
                   <Text>{NAIRA_SYSMBOL}{details?.totalPrice}</Text>
                   </View>
                  
                   <TouchableOpacity onPress={()=>console.log('Heloo')}>
                  <Text>1§11111111111</Text>
                   </TouchableOpacity>
                
                    </View>
                    
                    </View>
                  )
                })}</View>
                
                

                
                
                
                
                </View>
              )
            })}
            
            </View>



          )
        }}
      />
