# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 27 Jun 2023 03:31:25 GMT with Node.js v18.16.0 (V8 v10.2.154.26-node.26) on fv-az453-545 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (299%)        | `602`ns (300%)                 | `1,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `700`ns (348%)        | `800`ns (398%)                 | `1,428,571`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,100`ns (547%)      | `1,101`ns (548%)               | `909,091`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,301`ns (647%)      | `1,501`ns (747%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (797%)      | `1,800`ns (896%)               | `624,610`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,401`ns (1,195%)    | `2,701`ns (1,344%)             | `416,493`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,603`ns (2,290%)    | `5,003`ns (2,489%)             | `217,250`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,807`ns (4,382%)    | `9,303`ns (4,628%)             | `113,546`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,501`ns (107%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `55,231`ns (3,942%)   | `66,303`ns (4,733%)            | `18,106`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `68,735`ns (4,906%)   | `81,535`ns (5,820%)            | `14,549`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (249%)        | `700`ns (348%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (249%)        | `601`ns (299%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,301`ns (647%)      | `1,501`ns (747%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (647%)      | `1,701`ns (846%)               | `768,640`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (1,991%)    | `4,303`ns (2,141%)             | `249,938`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (151%)        | `301`ns (151%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (201%)        | `700`ns (350%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,301`ns (651%)      | `1,800`ns (900%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,501`ns (751%)      | `1,801`ns (901%)               | `666,223`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,103`ns (2,552%)    | `5,403`ns (2,702%)             | `195,963`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,203`ns (2,602%)    | `5,603`ns (2,802%)             | `192,197`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `501`ns (125%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
