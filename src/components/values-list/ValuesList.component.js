import React from "react";
import { connect } from "react-redux";

// import { getValues } from "../../store/actions/values.actions";

function ValuesList({ values }) {
  console.log(`ValuesList.js: values: `, values);
  return (
    <h4>
      {values.map(val => (
        <p key={val.id}>{val.value.toLowerCase()}</p>
      ))}
    </h4>
  );
}

const mapStateToProps = state => {
  //   console.log(`ValuesList.js: mapStateToProps: state.values: `, state.values);
  return {
    values: state.values.values,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(ValuesList);
//getValues
