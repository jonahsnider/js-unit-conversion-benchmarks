# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 03 May 2022 04:16:02 GMT with Node.js v18.0.0 (V8 v10.1.124.8-node.13) on fv-az290-18 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (250%)        | `501`ns (251%)                 | `2,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `701`ns (351%)        | `800`ns (400%)                 | `1,426,534`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,001`ns (501%)      | `1,001`ns (501%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (550%)      | `1,101`ns (551%)               | `909,091`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,700`ns (850%)      | `1,701`ns (851%)               | `588,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,901`ns (1,951%)    | `3,903`ns (1,952%)             | `256,345`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,407`ns (4,204%)    | `8,503`ns (4,252%)             | `118,948`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `900`ns (100%)        | `900`ns (100%)                 | `1,111,111`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `40,127`ns (4,459%)   | `44,223`ns (4,914%)            | `24,921`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,447`ns (8,939%)   | `81,919`ns (9,102%)            | `12,431`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (250%)        | `501`ns (251%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,001`ns (501%)      | `1,001`ns (501%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (550%)      | `1,101`ns (551%)               | `909,091`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (2,001%)    | `4,001`ns (2,001%)             | `249,938`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,001`ns (501%)      | `1,100`ns (550%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,400`ns (700%)      | `1,401`ns (701%)               | `714,286`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,403`ns (2,702%)    | `5,503`ns (2,752%)             | `185,082`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,403`ns (2,702%)    | `5,503`ns (2,752%)             | `185,082`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `500`ns (100%)        | `501`ns (100%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (100%)        | `501`ns (100%)                 | `2,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `600`ns (120%)        | `600`ns (120%)                 | `1,666,667`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `300`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (134%)        | `401`ns (134%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
