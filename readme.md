# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 23 Aug 2022 02:48:30 GMT with Node.js v18.7.0 (V8 v10.2.154.13-node.9) on fv-az318-647 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (397%)        | `401`ns (397%)                 | `2,493,766`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `600`ns (594%)        | `701`ns (694%)                 | `1,666,667`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,200`ns (1,188%)    | `1,301`ns (1,288%)             | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,001`ns (2,971%)    | `3,101`ns (3,070%)             | `333,222`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,403`ns (6,340%)    | `6,703`ns (6,637%)             | `156,177`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `700`ns (100%)        | `800`ns (114%)                 | `1,428,571`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `30,415`ns (4,345%)   | `35,231`ns (5,033%)            | `32,879`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `50,623`ns (7,232%)   | `59,327`ns (8,475%)            | `19,754`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (397%)        | `401`ns (397%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `800`ns (792%)        | `900`ns (891%)                 | `1,250,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `800`ns (792%)        | `900`ns (891%)                 | `1,250,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,001`ns (2,971%)    | `3,201`ns (3,169%)             | `333,222`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `300`ns (297%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `800`ns (792%)        | `900`ns (891%)                 | `1,250,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (1,089%)    | `1,101`ns (1,090%)             | `909,091`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,001`ns (3,961%)    | `4,203`ns (4,161%)             | `249,938`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,303`ns (4,260%)    | `4,403`ns (4,359%)             | `232,396`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (150%)        | `401`ns (201%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
