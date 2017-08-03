const {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  ListView
} = ReactNative;

import Prakarana from '../Prakarana/Prakarana';
import parividiVinyasa from './Parividi.Styles';
import prakaranaMahiti from './Parividi.data';

class Parividi extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(prakaranaMahiti),
    };
  }
  render() {
    return (
      <ListView
        style={parividiVinyasa.container}
        dataSource={this.state.dataSource}
        renderRow={(prakaranaMahiti) => <Prakarana {...prakaranaMahiti} />}
      />
    );
  }
}