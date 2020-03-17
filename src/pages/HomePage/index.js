import { connect } from 'react-redux';

import HomePage from './HomePage';

const mapStateToProps = state => ({
  main: state.main,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
