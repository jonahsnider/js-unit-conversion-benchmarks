# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 27 Oct 2021 04:37:42 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az204-922 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (250%)        | `501`ns (251%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (351%)        | `800`ns (400%)                 | `1,426,534`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,001`ns (501%)      | `1,001`ns (501%)               | `999,001`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,200`ns (600%)      | `1,400`ns (700%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,401`ns (701%)      | `1,500`ns (750%)               | `713,776`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,001`ns (1,001%)    | `2,301`ns (1,151%)             | `499,750`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,803`ns (2,402%)    | `5,003`ns (2,502%)             | `208,203`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,303`ns (4,152%)    | `8,607`ns (4,304%)             | `120,438`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,600`ns (114%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `47,903`ns (3,419%)   | `52,031`ns (3,714%)            | `20,876`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `68,607`ns (4,897%)   | `74,111`ns (5,290%)            | `14,576`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (201%)        | `401`ns (201%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `700`ns (350%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,100`ns (550%)      | `1,301`ns (651%)               | `909,091`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,301`ns (651%)               | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,103`ns (2,052%)    | `4,303`ns (2,152%)             | `243,724`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,601`ns (801%)      | `1,801`ns (901%)               | `624,610`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,701`ns (851%)      | `1,901`ns (951%)               | `587,889`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,903`ns (2,452%)    | `5,203`ns (2,602%)             | `203,957`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,903`ns (2,952%)    | `6,203`ns (3,102%)             | `169,405`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
