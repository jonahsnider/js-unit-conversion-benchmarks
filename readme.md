# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 01 Nov 2022 04:49:53 GMT with Node.js v18.12.0 (V8 v10.2.154.15-node.12) on fv-az173-501 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (397%)        | `401`ns (397%)                 | `2,493,766`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `600`ns (594%)        | `600`ns (594%)                 | `1,666,667`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `801`ns (793%)        | `801`ns (793%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,301`ns (1,288%)    | `1,400`ns (1,386%)             | `768,640`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,001`ns (2,971%)    | `3,101`ns (3,070%)             | `333,222`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,603`ns (6,538%)    | `6,703`ns (6,637%)             | `151,446`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `800`ns (114%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `33,407`ns (4,766%)   | `37,215`ns (5,309%)            | `29,934`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `60,223`ns (8,591%)   | `61,919`ns (8,833%)            | `16,605`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `900`ns (450%)        | `900`ns (450%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (550%)      | `1,101`ns (551%)               | `909,091`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,301`ns (1,651%)    | `3,301`ns (1,651%)             | `302,939`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `801`ns (401%)        | `900`ns (450%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,200`ns (600%)               | `833,333`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,103`ns (2,052%)    | `4,103`ns (2,052%)             | `243,724`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,303`ns (2,152%)    | `4,403`ns (2,202%)             | `232,396`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (150%)        | `401`ns (201%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
