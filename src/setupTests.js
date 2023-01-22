import { configure } from "enzyme";
import ReactEighteenAdapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new ReactEighteenAdapter() });
