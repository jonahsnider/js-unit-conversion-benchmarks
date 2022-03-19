# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 19 Mar 2022 02:48:14 GMT with Node.js v16.14.0 (V8 v9.4.146.24-node.20) on fv-az213-324 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

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
| [uom](https://npmjs.com/package/uom) (fast)                        | `400`ns (396%)        | `401`ns (397%)                 | `2,500,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `501`ns (496%)        | `601`ns (595%)                 | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `700`ns (693%)        | `801`ns (793%)                 | `1,428,571`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `701`ns (694%)        | `801`ns (793%)                 | `1,426,534`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,001`ns (991%)      | `1,101`ns (1,090%)             | `999,001`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,601`ns (2,575%)    | `2,903`ns (2,874%)             | `384,468`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,603`ns (5,548%)    | `6,503`ns (6,439%)             | `178,476`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `700`ns (100%)        | `801`ns (114%)                 | `1,428,571`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `27,215`ns (3,888%)   | `31,807`ns (4,544%)            | `36,744`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `51,519`ns (7,360%)   | `60,223`ns (8,603%)            | `19,410`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `301`ns (298%)        | `401`ns (397%)                 | `3,322,259`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `700`ns (693%)        | `801`ns (793%)                 | `1,428,571`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `800`ns (792%)        | `801`ns (793%)                 | `1,250,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,801`ns (2,773%)    | `3,201`ns (3,169%)             | `357,015`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (351%)        | `801`ns (401%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,000`ns (500%)      | `1,100`ns (550%)               | `1,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `3,601`ns (1,801%)    | `4,103`ns (2,052%)             | `277,701`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,601`ns (1,801%)    | `4,203`ns (2,102%)             | `277,701`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `301`ns (100%)        | `401`ns (133%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (133%)        | `401`ns (133%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (133%)        | `401`ns (133%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |

<!-- endblock(results) -->
