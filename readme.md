# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 07 Feb 2023 18:04:42 GMT with Node.js v18.13.0 (V8 v10.2.154.23-node.21) on fv-az359-62 (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `700`ns (350%)        | `701`ns (351%)                 | `1,428,571`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `900`ns (450%)        | `900`ns (450%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (450%)        | `900`ns (450%)                 | `1,111,111`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,400`ns (700%)      | `1,401`ns (701%)               | `714,286`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,401`ns (1,701%)    | `3,401`ns (1,701%)             | `294,031`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,703`ns (2,852%)    | `5,803`ns (2,902%)             | `175,346`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `700`ns (100%)        | `701`ns (100%)                 | `1,428,571`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,711`ns (5,102%)   | `38,623`ns (5,518%)            | `28,003`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `50,015`ns (7,145%)   | `50,815`ns (7,259%)            | `19,994`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (100%)        | `300`ns (150%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `800`ns (400%)        | `801`ns (401%)                 | `1,250,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `900`ns (450%)        | `901`ns (451%)                 | `1,111,111`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,601`ns (1,801%)    | `3,701`ns (1,851%)             | `277,701`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `900`ns (891%)        | `900`ns (891%)                 | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (1,089%)    | `1,101`ns (1,090%)             | `909,091`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `3,701`ns (3,664%)    | `3,801`ns (3,763%)             | `270,197`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,803`ns (4,755%)    | `4,903`ns (4,854%)             | `208,203`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
