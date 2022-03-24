# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 24 Mar 2022 01:33:07 GMT with Node.js v16.14.0 (V8 v9.4.146.24-node.20) on fv-az502-71 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `400`ns (199%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (199%)        | `400`ns (199%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (299%)        | `700`ns (348%)                 | `1,666,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `901`ns (448%)        | `1,000`ns (498%)               | `1,109,878`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,401`ns (697%)      | `1,501`ns (747%)               | `713,776`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,800`ns (896%)      | `1,901`ns (946%)               | `555,556`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,501`ns (1,244%)    | `2,801`ns (1,394%)             | `399,840`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,203`ns (2,589%)    | `5,503`ns (2,738%)             | `192,197`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,403`ns (3,683%)    | `7,903`ns (3,932%)             | `135,080`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,200`ns (100%)      | `1,301`ns (108%)               | `833,333`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `38,719`ns (3,227%)   | `42,111`ns (3,509%)            | `25,827`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `54,623`ns (4,552%)   | `62,015`ns (5,168%)            | `18,307`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `301`ns (298%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `301`ns (298%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (397%)        | `500`ns (495%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `901`ns (892%)        | `1,200`ns (1,188%)             | `1,109,878`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,001`ns (991%)      | `1,100`ns (1,089%)             | `999,001`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,401`ns (3,367%)    | `3,701`ns (3,664%)             | `294,031`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (151%)        | `400`ns (200%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (151%)        | `301`ns (151%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,400`ns (700%)      | `1,701`ns (851%)               | `714,286`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,600`ns (800%)      | `1,800`ns (900%)               | `625,000`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,503`ns (2,252%)    | `4,903`ns (2,452%)             | `222,074`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,303`ns (2,652%)    | `5,703`ns (2,852%)             | `188,573`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `301`ns (100%)        | `400`ns (133%)                 | `3,322,259`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `301`ns (100%)        | `400`ns (133%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `400`ns (133%)        | `401`ns (133%)                 | `2,500,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |

<!-- endblock(results) -->
