# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 12 Dec 2021 23:23:09 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az292-702 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `300`ns (297%)        | `400`ns (396%)                 | `3,333,333`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `501`ns (496%)        | `600`ns (594%)                 | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `700`ns (693%)        | `701`ns (694%)                 | `1,428,571`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `700`ns (693%)        | `701`ns (694%)                 | `1,428,571`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,100`ns (1,089%)    | `1,101`ns (1,090%)             | `909,091`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,701`ns (2,674%)    | `2,801`ns (2,773%)             | `370,233`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,903`ns (5,845%)    | `6,003`ns (5,944%)             | `169,405`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `700`ns (100%)        | `701`ns (100%)                 | `1,428,571`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,207`ns (4,030%)   | `28,607`ns (4,087%)            | `35,452`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `54,623`ns (7,803%)   | `55,423`ns (7,918%)            | `18,307`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `101`ns (100%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `300`ns (297%)        | `400`ns (396%)                 | `3,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `700`ns (693%)        | `701`ns (694%)                 | `1,428,571`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `701`ns (694%)        | `801`ns (793%)                 | `1,426,534`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,801`ns (2,773%)    | `2,801`ns (2,773%)             | `357,015`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (694%)        | `801`ns (793%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,000`ns (990%)      | `1,001`ns (991%)               | `1,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `3,703`ns (3,666%)    | `3,801`ns (3,763%)             | `270,051`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (3,961%)    | `4,103`ns (4,062%)             | `249,938`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `300`ns (100%)        | `400`ns (133%)                 | `3,333,333`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `300`ns (100%)        | `400`ns (133%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `400`ns (133%)        | `401`ns (134%)                 | `2,500,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (149%)        | `300`ns (149%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
