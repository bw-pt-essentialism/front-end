import React from "react";
import { connect } from "react-redux";
import Value from "../value/Value.component";

// import { getValues } from "../../store/actions/values.actions";

function ValuesList({ values }) {
  console.log(`ValuesList.js: values: `, values);
  return (
    <h4>
      {/* {values.map(val => (
        <Value key={val.id} info={val.value.toLowerCase()} />
      ))} */}
      {values.map(
        val =>
          val.id === values[7].id && (
            <Value key={val.id} info={val.value.toLowerCase()} />
          )
      )}
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
