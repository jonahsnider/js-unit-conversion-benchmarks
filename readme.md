# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 02 Jun 2023 01:13:51 GMT with Node.js v18.16.0 (V8 v10.2.154.26-node.26) on fv-az565-633 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `401`ns (201%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `701`ns (351%)        | `800`ns (400%)                 | `1,426,534`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,000`ns (500%)      | `1,001`ns (501%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,001`ns (501%)      | `1,100`ns (550%)               | `999,001`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,601`ns (801%)      | `1,700`ns (850%)               | `624,610`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,701`ns (1,851%)    | `3,801`ns (1,901%)             | `270,197`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,103`ns (4,052%)    | `8,207`ns (4,104%)             | `123,411`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `801`ns (100%)        | `900`ns (112%)                 | `1,248,439`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `43,519`ns (5,433%)   | `47,807`ns (5,968%)            | `22,978`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,847`ns (8,845%)   | `72,959`ns (9,108%)            | `14,115`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (250%)        | `500`ns (250%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `900`ns (450%)        | `1,000`ns (500%)               | `1,111,111`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,001`ns (501%)      | `1,001`ns (501%)               | `999,001`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,601`ns (1,801%)    | `3,701`ns (1,851%)             | `277,701`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `300`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,001`ns (501%)      | `1,001`ns (501%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (651%)      | `1,301`ns (651%)               | `768,640`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,803`ns (2,402%)    | `4,903`ns (2,452%)             | `208,203`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,203`ns (2,602%)    | `5,203`ns (2,602%)             | `192,197`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `501`ns (125%)        | `600`ns (150%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `300`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (134%)        | `500`ns (167%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
