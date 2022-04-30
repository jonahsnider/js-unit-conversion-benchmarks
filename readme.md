# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 30 Apr 2022 03:37:40 GMT with Node.js v18.0.0 (V8 v10.1.124.8-node.13) on fv-az198-991 (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (151%)        | `400`ns (200%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (250%)        | `500`ns (250%)                 | `2,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `701`ns (351%)        | `701`ns (351%)                 | `1,426,534`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `901`ns (451%)        | `1,000`ns (500%)               | `1,109,878`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `901`ns (451%)        | `1,000`ns (500%)               | `1,109,878`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,400`ns (700%)      | `1,401`ns (701%)               | `714,286`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,699`ns (1,850%)    | `3,701`ns (1,851%)             | `270,343`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,903`ns (2,952%)    | `6,103`ns (3,052%)             | `169,405`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `701`ns (100%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,831`ns (4,683%)   | `35,231`ns (5,026%)            | `30,459`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `53,023`ns (7,564%)   | `54,015`ns (7,705%)            | `18,860`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `500`ns (249%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `901`ns (448%)        | `901`ns (448%)                 | `1,109,878`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `901`ns (448%)        | `901`ns (448%)                 | `1,109,878`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,601`ns (1,792%)    | `3,699`ns (1,840%)             | `277,701`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,000`ns (500%)      | `1,001`ns (501%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,201`ns (601%)               | `833,333`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,001`ns (2,001%)    | `4,001`ns (2,001%)             | `249,938`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,003`ns (2,502%)    | `5,103`ns (2,552%)             | `199,880`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `500`ns (100%)        | `500`ns (100%)                 | `2,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (100%)        | `600`ns (120%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (100%)        | `500`ns (100%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
