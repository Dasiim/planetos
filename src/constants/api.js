import * as moment from "moment";

const apiKey = "2dfe078edf2448e9b4d5e569a8861076";
const startDate = moment().format();
const endDate = moment().add(1, "day").format();
export const SOLAR_ACTIVITY_URL = `http://api.planetos.com/v1/datasets/bom_access-g_global_40km/point?lon=-50.5&lat=49.5&apikey=${apiKey}&var=av_swsfcdown&count=20&start=${startDate}Z&end=${endDate}Z`;
export const CLOUD_COVERAGE_URL = `http://api.planetos.com/v1/datasets/bom_access-g_global_40km/point?lon=-50.5&lat=49.5&apikey=${apiKey}&var=av_ttl_cld&count=20&start=${startDate}Z&end=${endDate}Z`;