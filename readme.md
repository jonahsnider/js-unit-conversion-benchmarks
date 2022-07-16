# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 16 Jul 2022 03:35:46 GMT with Node.js v18.6.0 (V8 v10.2.154.13-node.8) on fv-az502-63 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (200%)        | `500`ns (249%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (349%)        | `800`ns (398%)                 | `1,426,534`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `800`ns (398%)        | `900`ns (448%)                 | `1,250,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,001`ns (498%)      | `1,100`ns (547%)               | `999,001`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,301`ns (647%)      | `1,501`ns (747%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (797%)      | `1,701`ns (846%)               | `624,610`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,501`ns (1,244%)    | `2,701`ns (1,344%)             | `399,840`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,703`ns (2,340%)    | `4,903`ns (2,439%)             | `212,630`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,807`ns (4,382%)    | `9,103`ns (4,529%)             | `113,546`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,600`ns (100%)      | `1,701`ns (106%)               | `625,000`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `55,007`ns (3,438%)   | `62,111`ns (3,882%)            | `18,180`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,615`ns (4,476%)   | `76,415`ns (4,776%)            | `13,964`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `600`ns (299%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (299%)        | `600`ns (299%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,200`ns (597%)      | `1,401`ns (697%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,400`ns (697%)      | `1,700`ns (846%)               | `714,286`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,503`ns (2,240%)    | `4,603`ns (2,290%)             | `222,074`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `701`ns (349%)        | `801`ns (399%)                 | `1,426,534`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,601`ns (797%)      | `1,901`ns (946%)               | `624,610`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,901`ns (946%)      | `2,101`ns (1,045%)             | `526,039`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,303`ns (2,638%)    | `5,503`ns (2,738%)             | `188,573`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,103`ns (3,036%)    | `6,403`ns (3,186%)             | `163,854`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `600`ns (150%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (125%)        | `500`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (133%)        | `401`ns (134%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
