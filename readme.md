# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 14 Jun 2022 16:50:57 GMT with Node.js v18.3.0 (V8 v10.2.154.4-node.8) on fv-az460-270 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (249%)        | `501`ns (249%)                 | `1,996,008`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `800`ns (398%)        | `801`ns (399%)                 | `1,250,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,000`ns (498%)      | `1,000`ns (498%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (547%)      | `1,100`ns (547%)               | `909,091`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,501`ns (747%)      | `1,600`ns (796%)               | `666,223`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,703`ns (1,842%)    | `3,801`ns (1,891%)             | `270,051`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,703`ns (3,832%)    | `7,803`ns (3,882%)             | `129,820`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `901`ns (100%)        | `1,000`ns (111%)               | `1,109,878`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `40,223`ns (4,464%)   | `44,223`ns (4,908%)            | `24,861`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,063`ns (7,998%)   | `74,047`ns (8,218%)            | `13,877`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `501`ns (249%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,000`ns (498%)      | `1,100`ns (547%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (547%)      | `1,100`ns (547%)               | `909,091`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,303`ns (2,141%)    | `4,403`ns (2,191%)             | `232,396`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `401`ns (200%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,001`ns (498%)      | `1,100`ns (547%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,500`ns (746%)      | `1,501`ns (747%)               | `666,667`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,903`ns (2,439%)    | `5,003`ns (2,489%)             | `203,957`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,503`ns (2,738%)    | `5,603`ns (2,788%)             | `181,719`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `500`ns (100%)        | `500`ns (100%)                 | `2,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (100%)        | `600`ns (120%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (100%)        | `500`ns (100%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (134%)        | `500`ns (167%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
