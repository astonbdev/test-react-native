import{ View, Text} from "react-native";
import UpcomingItemList from "./UpcomingItemList";

/**
 * Homepage -- renders a header, upcomingItemList, Assessment List
 *  
 */
function Home(){
    return (
        <View>
            <Text>Cohort</Text>
            <UpcomingItemList />
        </View>

    );
}
export default Home;