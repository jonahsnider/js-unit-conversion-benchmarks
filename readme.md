# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 22 Aug 2023 13:34:33 GMT with Node.js v18.17.1 (V8 v10.2.154.26-node.26) on fv-az1232-886 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `701`ns (351%)        | `900`ns (450%)                 | `1,426,534`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `900`ns (450%)        | `1,001`ns (501%)               | `1,111,111`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,401`ns (701%)      | `1,601`ns (801%)               | `713,776`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,700`ns (850%)      | `1,801`ns (901%)               | `588,235`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,801`ns (1,401%)    | `3,101`ns (1,551%)             | `357,015`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,203`ns (2,602%)    | `5,403`ns (2,702%)             | `192,197`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,007`ns (4,504%)    | `9,407`ns (4,704%)             | `111,025`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,500`ns (100%)      | `1,701`ns (113%)               | `666,667`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `60,415`ns (4,028%)   | `70,143`ns (4,676%)            | `16,552`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,007`ns (5,000%)   | `86,463`ns (5,764%)            | `13,332`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `401`ns (201%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (201%)        | `600`ns (300%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (251%)        | `600`ns (300%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,301`ns (651%)      | `1,601`ns (801%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,400`ns (700%)      | `1,800`ns (900%)               | `714,286`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,703`ns (2,352%)    | `4,903`ns (2,452%)             | `212,630`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (251%)        | `800`ns (400%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,601`ns (801%)      | `1,901`ns (951%)               | `624,610`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,701`ns (851%)      | `2,001`ns (1,001%)             | `587,889`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,303`ns (2,652%)    | `5,603`ns (2,802%)             | `188,573`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,003`ns (3,002%)    | `6,303`ns (3,152%)             | `166,583`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (100%)        | `501`ns (100%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (100%)        | `500`ns (100%)                 | `2,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `501`ns (100%)        | `600`ns (120%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `300`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (134%)        | `401`ns (134%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
