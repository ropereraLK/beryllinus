import config from "@config";
import axios from "axios";
import { IdentityEndpoints } from "./endpoints";

axios.post(
    config.identity + IdentityEndpoints.LOGIN
);