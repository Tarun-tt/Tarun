import reduxBasics from "./redux-basics/index.js";
import store from "./store/index.js";
import actions from "./actions/index.js";
import reducers from "./reducers/index.js";
import dispatch from "./dispatch/index.js";
import configureStore from "./configure-store/index.js";
import createSlice from "./create-slice/index.js";
import selectors from "./selectors/index.js";
import middleware from "./middleware/index.js";
import thunk from "./thunk/index.js";
import createAsyncThunk from "./create-async-thunk/index.js";
import extraReducers from "./extra-reducers/index.js";
import rtkQuery from "./rtk-query/index.js";
import reduxDevtools from "./redux-devtools/index.js";
import reduxPersist from "./redux-persist/index.js";
import normalization from "./normalization/index.js";
import bestPractices from "./best-practices/index.js";
import folderStructure from "./folder-structure/index.js";

const topics = {
  "redux-basics": reduxBasics,
  "store": store,
  "actions": actions,
  "reducers": reducers,
  "dispatch": dispatch,
  "configure-store": configureStore,
  "create-slice": createSlice,
  "selectors": selectors,
  "middleware": middleware,
  "thunk": thunk,
  "create-async-thunk": createAsyncThunk,
  "extra-reducers": extraReducers,
  "rtk-query": rtkQuery,
  "redux-devtools": reduxDevtools,
  "redux-persist": reduxPersist,
  "normalization": normalization,
  "best-practices": bestPractices,
  "folder-structure": folderStructure,
};

export default topics;
export { topics };
