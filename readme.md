# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 08 Dec 2022 04:27:41 GMT with Node.js v18.12.1 (V8 v10.2.154.15-node.12) on fv-az256-810 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `700`ns (350%)        | `801`ns (401%)                 | `1,428,571`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,000`ns (500%)      | `1,100`ns (550%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,401`ns (701%)      | `1,601`ns (801%)               | `713,776`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,600`ns (800%)      | `1,800`ns (900%)               | `625,000`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,401`ns (1,201%)    | `2,701`ns (1,351%)             | `416,493`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,603`ns (2,302%)    | `4,903`ns (2,452%)             | `217,250`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,407`ns (4,204%)    | `9,007`ns (4,504%)             | `118,948`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,600`ns (114%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `49,407`ns (3,527%)   | `59,807`ns (4,269%)            | `20,240`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `65,215`ns (4,655%)   | `79,231`ns (5,655%)            | `15,334`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (250%)        | `600`ns (300%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (250%)        | `600`ns (300%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,301`ns (651%)      | `1,601`ns (801%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,401`ns (701%)      | `1,800`ns (900%)               | `713,776`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,203`ns (2,102%)    | `4,503`ns (2,252%)             | `237,925`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `701`ns (349%)                 | `2,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,600`ns (796%)      | `1,802`ns (897%)               | `625,000`/sec         |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,600`ns (796%)      | `1,901`ns (946%)               | `625,000`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,903`ns (2,439%)    | `5,203`ns (2,589%)             | `203,957`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,403`ns (2,688%)    | `5,803`ns (2,887%)             | `185,082`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `301`ns (100%)        | `400`ns (133%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `400`ns (133%)        | `401`ns (133%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (133%)        | `500`ns (166%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |

<!-- endblock(results) -->
