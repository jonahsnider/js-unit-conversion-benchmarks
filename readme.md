# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 02 Mar 2022 04:28:21 GMT with Node.js v16.14.0 (V8 v9.4.146.24-node.20) on fv-az216-500 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

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
| [moment](https://npmjs.com/package/moment) (popular)               | `700`ns (693%)        | `701`ns (694%)                 | `1,428,571`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,200`ns (1,188%)    | `1,300`ns (1,287%)             | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,201`ns (3,169%)    | `3,203`ns (3,171%)             | `312,402`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,703`ns (6,637%)    | `6,903`ns (6,835%)             | `149,187`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `800`ns (114%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,415`ns (4,624%)   | `33,119`ns (4,725%)            | `30,850`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `62,303`ns (8,888%)   | `63,519`ns (9,061%)            | `16,051`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `800`ns (400%)        | `801`ns (401%)                 | `1,250,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (450%)        | `900`ns (450%)                 | `1,111,111`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,201`ns (1,601%)    | `3,201`ns (1,601%)             | `312,402`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `202`ns (101%)        | `300`ns (150%)                 | `4,950,495`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `801`ns (401%)        | `900`ns (450%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (550%)      | `1,101`ns (551%)               | `909,091`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,203`ns (2,102%)    | `4,303`ns (2,152%)             | `237,925`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,403`ns (2,202%)    | `4,503`ns (2,252%)             | `227,118`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `500`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
