# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 15 Apr 2022 04:09:50 GMT with Node.js v16.14.2 (V8 v9.4.146.24-node.20) on fv-az154-951 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `301`ns (298%)        | `401`ns (397%)                 | `3,322,259`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `501`ns (496%)        | `600`ns (594%)                 | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `701`ns (694%)        | `800`ns (792%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `800`ns (792%)        | `801`ns (793%)                 | `1,250,000`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,100`ns (1,089%)    | `1,100`ns (1,089%)             | `909,091`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,801`ns (2,773%)    | `2,901`ns (2,872%)             | `357,015`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,903`ns (5,845%)    | `6,003`ns (5,944%)             | `169,405`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `700`ns (100%)        | `701`ns (100%)                 | `1,428,571`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,415`ns (4,059%)   | `28,911`ns (4,130%)            | `35,193`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `53,503`ns (7,643%)   | `54,431`ns (7,776%)            | `18,691`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `301`ns (298%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `301`ns (298%)        | `400`ns (396%)                 | `3,322,259`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `700`ns (693%)        | `701`ns (694%)                 | `1,428,571`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `701`ns (694%)        | `701`ns (694%)                 | `1,426,534`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,801`ns (2,773%)    | `2,801`ns (2,773%)             | `357,015`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `201`ns (199%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (694%)        | `701`ns (694%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,000`ns (990%)      | `1,000`ns (990%)               | `1,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `3,701`ns (3,664%)    | `3,801`ns (3,763%)             | `270,197`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,901`ns (3,862%)    | `3,901`ns (3,862%)             | `256,345`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `301`ns (100%)        | `400`ns (133%)                 | `3,322,259`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (133%)        | `401`ns (133%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (133%)        | `401`ns (133%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |

<!-- endblock(results) -->
