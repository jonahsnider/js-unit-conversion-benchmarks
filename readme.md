# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 31 Aug 2023 02:13:46 GMT with Node.js v18.17.1 (V8 v10.2.154.26-node.26) on fv-az1241-104 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `701`ns (351%)        | `900`ns (450%)                 | `1,426,534`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,100`ns (550%)      | `1,101`ns (551%)               | `909,091`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,401`ns (701%)      | `1,601`ns (801%)               | `713,776`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,701`ns (851%)      | `1,901`ns (951%)               | `587,889`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,901`ns (1,451%)    | `3,201`ns (1,601%)             | `344,709`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,303`ns (2,652%)    | `5,603`ns (2,802%)             | `188,573`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,207`ns (4,604%)    | `9,607`ns (4,804%)             | `108,613`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,900`ns (100%)      | `2,000`ns (105%)               | `526,316`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `62,911`ns (3,311%)   | `71,615`ns (3,769%)            | `15,895`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,263`ns (3,961%)   | `85,119`ns (4,480%)            | `13,287`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (250%)        | `600`ns (300%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `700`ns (350%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,301`ns (651%)      | `1,600`ns (800%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,501`ns (751%)      | `1,901`ns (951%)               | `666,223`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,503`ns (2,252%)    | `4,703`ns (2,352%)             | `222,074`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (300%)        | `800`ns (400%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,601`ns (801%)      | `2,001`ns (1,001%)             | `624,610`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,900`ns (950%)      | `2,101`ns (1,051%)             | `526,316`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,803`ns (2,902%)    | `6,103`ns (3,052%)             | `172,325`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,403`ns (3,202%)    | `6,703`ns (3,352%)             | `156,177`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `300`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (134%)        | `401`ns (134%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
