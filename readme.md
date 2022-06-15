# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 15 Jun 2022 20:06:31 GMT with Node.js v18.3.0 (V8 v10.2.154.4-node.8) on fv-az203-681 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (151%)        | `401`ns (201%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `701`ns (351%)        | `801`ns (401%)                 | `1,426,534`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,000`ns (500%)      | `1,001`ns (501%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,500`ns (750%)      | `1,601`ns (801%)               | `666,667`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (801%)      | `1,800`ns (900%)               | `624,610`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,201`ns (1,101%)    | `2,401`ns (1,201%)             | `454,339`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,703`ns (2,352%)    | `4,903`ns (2,452%)             | `212,630`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,103`ns (4,052%)    | `8,407`ns (4,204%)             | `123,411`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,501`ns (107%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `51,327`ns (3,664%)   | `56,703`ns (4,047%)            | `19,483`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `63,231`ns (4,513%)   | `65,919`ns (4,705%)            | `15,815`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (200%)        | `500`ns (250%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (251%)        | `600`ns (300%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,001`ns (501%)      | `1,300`ns (650%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,400`ns (700%)               | `833,333`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (2,001%)    | `4,203`ns (2,102%)             | `249,938`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,400`ns (700%)      | `1,700`ns (850%)               | `714,286`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,800`ns (900%)      | `2,000`ns (1,000%)             | `555,556`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,003`ns (2,502%)    | `5,203`ns (2,602%)             | `199,880`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,803`ns (2,902%)    | `6,103`ns (3,052%)             | `172,325`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
