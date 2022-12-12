# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 12 Dec 2022 06:20:11 GMT with Node.js v18.12.1 (V8 v10.2.154.15-node.12) on fv-az256-721 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,000`ns (500%)      | `1,001`ns (501%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,400`ns (700%)      | `1,601`ns (801%)               | `714,286`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,700`ns (850%)      | `1,801`ns (901%)               | `588,235`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,301`ns (1,151%)    | `2,601`ns (1,301%)             | `434,594`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,603`ns (2,302%)    | `4,903`ns (2,452%)             | `217,250`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,303`ns (4,152%)    | `8,903`ns (4,452%)             | `120,438`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,600`ns (114%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `53,727`ns (3,835%)   | `64,607`ns (4,611%)            | `18,613`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `68,351`ns (4,879%)   | `79,999`ns (5,710%)            | `14,630`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (201%)        | `501`ns (251%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (250%)        | `600`ns (300%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,200`ns (600%)      | `1,500`ns (750%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,601`ns (801%)               | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,601`ns (1,801%)    | `3,901`ns (1,951%)             | `277,701`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,400`ns (700%)      | `1,800`ns (900%)               | `714,286`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (801%)      | `1,901`ns (951%)               | `624,610`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,103`ns (2,552%)    | `5,503`ns (2,752%)             | `195,963`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,603`ns (2,802%)    | `6,103`ns (3,052%)             | `178,476`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (150%)        | `401`ns (201%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
