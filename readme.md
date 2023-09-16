# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 16 Sep 2023 13:38:13 GMT with Node.js v18.17.1 (V8 v10.2.154.26-node.26) on fv-az459-497 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (397%)        | `401`ns (397%)                 | `2,493,766`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `701`ns (694%)        | `701`ns (694%)                 | `1,426,534`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `900`ns (891%)        | `900`ns (891%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (891%)        | `900`ns (891%)                 | `1,111,111`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,700`ns (1,683%)    | `1,800`ns (1,782%)             | `588,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,301`ns (3,268%)    | `3,401`ns (3,367%)             | `302,939`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,103`ns (7,033%)    | `7,303`ns (7,231%)             | `140,786`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `800`ns (100%)        | `801`ns (100%)                 | `1,250,000`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `38,111`ns (4,764%)   | `44,415`ns (5,552%)            | `26,239`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `67,007`ns (8,376%)   | `69,759`ns (8,720%)            | `14,924`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `801`ns (401%)        | `900`ns (450%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (450%)        | `900`ns (450%)                 | `1,111,111`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,201`ns (1,601%)    | `3,201`ns (1,601%)             | `312,402`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `900`ns (450%)        | `900`ns (450%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,101`ns (551%)      | `1,101`ns (551%)               | `908,265`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,403`ns (2,202%)    | `4,503`ns (2,252%)             | `227,118`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,503`ns (2,252%)    | `4,603`ns (2,302%)             | `222,074`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
