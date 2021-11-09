# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 09 Nov 2021 02:41:00 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az216-17 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `400`ns (396%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (396%)        | `401`ns (397%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (594%)        | `600`ns (594%)                 | `1,666,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `801`ns (793%)        | `900`ns (891%)                 | `1,248,439`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,100`ns (1,089%)    | `1,200`ns (1,188%)             | `909,091`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,201`ns (1,189%)    | `1,301`ns (1,288%)             | `832,639`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,901`ns (1,882%)    | `2,201`ns (2,179%)             | `526,039`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,203`ns (4,161%)    | `4,403`ns (4,359%)             | `237,925`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,303`ns (7,231%)    | `7,603`ns (7,528%)             | `136,930`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,300`ns (100%)      | `1,400`ns (108%)               | `769,231`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `41,215`ns (3,170%)   | `47,007`ns (3,616%)            | `24,263`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `61,407`ns (4,724%)   | `72,511`ns (5,578%)            | `16,285`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (496%)        | `600`ns (594%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,001`ns (991%)      | `1,300`ns (1,287%)             | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,001`ns (991%)      | `1,101`ns (1,090%)             | `999,001`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,601`ns (3,565%)    | `3,801`ns (3,763%)             | `277,701`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,500`ns (750%)      | `1,801`ns (901%)               | `666,667`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (801%)      | `1,800`ns (900%)               | `624,610`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,503`ns (2,252%)    | `4,803`ns (2,402%)             | `222,074`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,303`ns (2,652%)    | `5,603`ns (2,802%)             | `188,573`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `300`ns (100%)        | `400`ns (133%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `400`ns (133%)        | `401`ns (134%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (133%)        | `400`ns (133%)                 | `2,500,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (149%)        | `400`ns (199%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
